import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GiraffeIcon = defineComponent({
  name: 'GiraffeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '18', cy: '32', rx: '11', ry: '7', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M24 31 L26 13 L31 13 L28 33 Z', fill: '#E9C46A' }));
      children.push(h('ellipse', { cx: '30', cy: '11', rx: '6', ry: '4', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M27 7 L27 10 M33 7 L33 10', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M14 39 L13 42 M20 39 L20 42 M25 39 L25 42', stroke: '#8B5E3C', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('circle', { cx: '29', cy: '10', r: '1.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '30', r: '2', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '22', cy: '34', r: '2', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '20', r: '1.8', fill: '#8B5E3C', stroke: 'none' }));
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

export default GiraffeIcon;
