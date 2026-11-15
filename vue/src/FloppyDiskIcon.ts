import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FloppyDiskIcon = defineComponent({
  name: 'FloppyDiskIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '8', width: '32', height: '32', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '17', y: '8', width: '14', height: '11', fill: '#E9C46A' }));
      children.push(h('rect', { x: '25.5', y: '9.5', width: '3.5', height: '8', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '13', y: '24', width: '22', height: '11', rx: '1.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M17 28 H31 M17 31.5 H27', stroke: '#264653', 'stroke-width': sw(1.6), fill: 'none' }));
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

export default FloppyDiskIcon;
