import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MagazineIcon = defineComponent({
  name: 'MagazineIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '6', width: '32', height: '36', rx: '2', fill: '#FFFFFF' }));
      children.push(h('rect', { x: '8', y: '6', width: '32', height: '9', rx: '2', fill: '#E76F51', stroke: 'none' }));
      children.push(h('rect', { x: '13', y: '20', width: '22', height: '13', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M15 38 L33 38', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default MagazineIcon;
