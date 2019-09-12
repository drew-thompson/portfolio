import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
import {
  MetaTagPosition,
  OGMetaDefinition,
  ProductMetaDefinition,
  ProductMetaProperty,
  TwitterMetaDefinition
} from '@portfolio/data/models';

@Injectable({
  providedIn: 'root'
})
export class MetaService {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta
  ) {}

  /**
   * Updates an OpenGraph meta tag.
   */
  updateOGTag(tag: OGMetaDefinition, order: MetaTagPosition = 'default'): void {
    const key = `og:${tag.property}`;
    const { property, ...filtered } = tag;
    this.updateTag({ tag: { property: key, ...filtered }, order });
  }

  /**
   * Updates a Twitter meta tag.
   */
  updateTwitterTag(
    tag: TwitterMetaDefinition,
    order: MetaTagPosition = 'default'
  ): void {
    this.updateTag({ tag: { name: `twitter:${tag.name}`, ...tag }, order });
  }

  /**
   * Updates a product meta tag.
   */
  updateProductTag(
    tag: ProductMetaDefinition,
    order: MetaTagPosition = 'default'
  ): void {
    const key = `product:${tag.property}`;
    const { property, ...filtered } = tag;
    this.updateTag({ tag: { property: key, ...filtered }, order });
  }

  /**
   * Removes a product meta tag.
   */
  removeProductTag(name: ProductMetaProperty): void {
    this.meta.removeTag(`property='product:${name}'`);
  }

  updateTag({
    tag,
    order = 'default'
  }: {
    tag: MetaDefinition;
    order: MetaTagPosition;
  }): void {
    if (order === 'default') {
      this.meta.updateTag(tag);
    } else if (order === 'top') {
      try {
        const meta = this.document.createElement('meta');
        if (tag.property) {
          meta.setAttribute('property', tag.property);
        } else {
          meta.name = tag.name;
        }
        meta.content = tag.content;

        const head = this.document.head;
        head.insertBefore(meta, head.firstChild);
      } catch (e) {
        console.error('Issue pushing tag to top of head:', e);
      }
    }
  }

  updateCanonical(href: string): void {
    const head = this.document.head;
    const name = 'canonical';
    const link: HTMLLinkElement =
      head.querySelector(name) || this.document.createElement('link');
    link.rel = name;
    link.href = href;
    head.insertBefore(link, head.firstChild);
  }

  removeCanonical(): void {
    const link = this.document.querySelector("link[rel='canonical']");
    if (link) {
      this.document.head.removeChild(link);
    }
  }
}
