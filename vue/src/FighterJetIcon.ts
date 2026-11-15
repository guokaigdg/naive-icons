import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FighterJetIcon = defineComponent({
  name: 'FighterJetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 5 L27.2 12 L27.2 27 L24 32 L20.8 27 L20.8 12 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M20.8 15.5 L6.5 26.5 L6.5 30.5 L20.8 27 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M27.2 15.5 L41.5 26.5 L41.5 30.5 L27.2 27 Z', fill: '#E76F51' }));
      children.push(h('path', { d: 'M20.8 28 L16 36 L20.8 34 Z', fill: '#E76F51', 'stroke-width': sw(2.2) }));
      children.push(h('path', { d: 'M27.2 28 L32 36 L27.2 34 Z', fill: '#E76F51', 'stroke-width': sw(2.2) }));
      children.push(h('circle', { cx: '24', cy: '13', r: '2.2', fill: '#FAEDCD', 'stroke-width': sw(2.4) }));
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

export default FighterJetIcon;
