import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SubwayIcon = defineComponent({
  name: 'SubwayIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '8', width: '28', height: '28', rx: '6', fill: '#264653' }));
      children.push(h('rect', { x: '14', y: '12', width: '20', height: '12', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '16', cy: '30', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '30', r: '2', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M14 36 L10 42 M34 36 L38 42', stroke: '#2A2A2A', fill: 'none' }));
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

export default SubwayIcon;
