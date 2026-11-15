import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScatterChartIcon = defineComponent({
  name: 'ScatterChartIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 8 L7 41 L41 41', stroke: '#2A2A2A', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('circle', { cx: '15', cy: '32', r: '2.6', fill: '#E76F51', stroke: 'none' }));
      children.push(h('circle', { cx: '21', cy: '25', r: '2.6', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '29', r: '2.6', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '18', r: '2.6', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '37', cy: '23', r: '2.6', fill: '#E76F51', stroke: 'none' }));
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

export default ScatterChartIcon;
