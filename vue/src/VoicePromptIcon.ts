import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VoicePromptIcon = defineComponent({
  name: 'VoicePromptIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '20', y: '7', width: '8', height: '20', rx: '4', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M14 21 C14 29 34 29 34 21 M24 29 V36 M18 36 H30', 'stroke-width': sw(2.8), fill: 'none' }));
      children.push(h('path', { d: 'M38 8 L40 12 L44 14 L40 16 L38 20 L36 16 L32 14 L36 12 Z', fill: '#E9C46A', stroke: 'none' }));
      const labelled = Boolean(props.title || attrs['aria-label'] || attrs.role);
      return h(
        'svg',
        {
          viewBox: '0 0 48 48',
          xmlns: 'http://www.w3.org/2000/svg',
          fill: 'none',
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          role: props.title ? 'img' : undefined,
          'aria-hidden': labelled ? undefined : true,
          ...normalizeIconProps({ ...props, ...attrs }),
        },
        children,
      );
    };
  },
});

export default VoicePromptIcon;
