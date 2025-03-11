// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface HeadingSection {
  /**
   * Unique identifier for the section.
   */
  id?: string;

  /**
   * Nested sections under the heading.
   */
  children?: Array<Section>;

  /**
   * Specifies the heading level (e.g., H1 to H6).
   */
  level?: number;

  /**
   * The actual text of the heading.
   */
  text?: string;

  type?: 'heading' | 'text' | 'list';
}

/**
 * Union of different content section types.
 */
export type Section = HeadingSection | Section.UnionMember1 | Section.UnionMember2;

export namespace Section {
  export interface UnionMember1 {
    /**
     * Unique identifier for the section.
     */
    id?: string;

    /**
     * Whether the label should be bold.
     */
    bold_label?: boolean;

    /**
     * Whether the label should be italicized.
     */
    italic_label?: boolean;

    /**
     * An optional label for the text section.
     */
    label?: string;

    /**
     * Defines whether text should be formatted as a bullet or numeric list.
     */
    list_type?: 'bullet' | 'numeric';

    /**
     * Maximum number of paragraphs allowed.
     */
    max_paragraphs?: number;

    /**
     * Maximum number of sentences allowed.
     */
    max_sentences?: number;

    /**
     * Minimum number of paragraphs required.
     */
    min_paragraphs?: number;

    /**
     * Minimum number of sentences required.
     */
    min_sentences?: number;

    /**
     * Common properties for text-based content.
     */
    properties?: UnionMember1.Properties;

    /**
     * The generated text content.
     */
    result?: string;

    type?: 'text' | 'heading' | 'list';
  }

  export namespace UnionMember1 {
    /**
     * Common properties for text-based content.
     */
    export interface Properties {
      /**
       * Whether the text should be bold.
       */
      bold?: boolean;

      /**
       * Determines the level of detail in the text content.
       */
      detail_level?: 'exhaustive' | 'detailed' | 'standard' | 'brief' | 'minimal';

      /**
       * Placeholder text to display if content is empty.
       */
      emptyPlaceholder?: string;

      /**
       * Specifies the formatting style of the text.
       */
      formatting_style?: 'markdown' | 'plain';

      /**
       * Whether to hide the content if it's empty.
       */
      hideIfEmpty?: boolean;

      /**
       * Whether the text should be italicized.
       */
      italic?: boolean;

      /**
       * Defines the tone of the generated text.
       */
      tone?: 'formal' | 'casual' | 'technical' | 'friendly' | 'instructional';
    }
  }

  export interface UnionMember2 {
    /**
     * Unique identifier for the section.
     */
    id?: string;

    /**
     * Defines whether the list is bulleted or numbered.
     */
    list_type?: 'bullet' | 'numeric';

    /**
     * Maximum number of items allowed in the list.
     */
    max_items?: number;

    /**
     * Minimum number of items required in the list.
     */
    min_items?: number;

    /**
     * Common properties for text-based content.
     */
    properties?: UnionMember2.Properties;

    /**
     * The generated list items.
     */
    result?: Array<string>;

    type?: 'list' | 'heading' | 'text';
  }

  export namespace UnionMember2 {
    /**
     * Common properties for text-based content.
     */
    export interface Properties {
      /**
       * Whether the text should be bold.
       */
      bold?: boolean;

      /**
       * Determines the level of detail in the text content.
       */
      detail_level?: 'exhaustive' | 'detailed' | 'standard' | 'brief' | 'minimal';

      /**
       * Placeholder text to display if content is empty.
       */
      emptyPlaceholder?: string;

      /**
       * Specifies the formatting style of the text.
       */
      formatting_style?: 'markdown' | 'plain';

      /**
       * Whether to hide the content if it's empty.
       */
      hideIfEmpty?: boolean;

      /**
       * Whether the text should be italicized.
       */
      italic?: boolean;

      /**
       * Defines the tone of the generated text.
       */
      tone?: 'formal' | 'casual' | 'technical' | 'friendly' | 'instructional';
    }
  }
}
