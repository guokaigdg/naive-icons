import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ShowerIcon = defineComponent({
  name: 'ShowerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 6 V12' }));
      children.push(h('path', { d: 'M16 18 C16 13 32 13 32 18', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M14 18 H34', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M16 25 V29', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M20 25 V33', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M24 25 V29', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M28 25 V33', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M32 25 V29', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
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

export default ShowerIcon;
