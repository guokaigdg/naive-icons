import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const LineChartIcon = defineComponent({
  name: 'LineChartIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M7 40 L41 40 M7 9 L7 40', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M11 32 L20 22 L28 27 L38 13', stroke: '#E76F51', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '22', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '27', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '38', cy: '13', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
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

export default LineChartIcon;
