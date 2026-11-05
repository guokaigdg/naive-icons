import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const RouterIcon = defineComponent({
  name: 'RouterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '26', width: '32', height: '14', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M14 26 L10 12 M34 26 L38 12', stroke: '#2A2A2A', fill: 'none' }));
      children.push(h('circle', { cx: '16', cy: '33', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '33', r: '2', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '33', r: '2', fill: '#E76F51', stroke: 'none' }));
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

export default RouterIcon;
