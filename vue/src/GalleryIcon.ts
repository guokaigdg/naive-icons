import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GalleryIcon = defineComponent({
  name: 'GalleryIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '14', width: '32', height: '27', rx: '2', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '12', y: '17', width: '24', height: '16', fill: '#E9C46A' }));
      children.push(h('rect', { x: '15', y: '20', width: '18', height: '10', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '24', r: '2.1', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M15 30 C 18.5 25.5 22.5 25.5 25.5 29.5 L33 30 Z', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('rect', { x: '20', y: '34', width: '8', height: '7', fill: '#E76F51' }));
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

export default GalleryIcon;
