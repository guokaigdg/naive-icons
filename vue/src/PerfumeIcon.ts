import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PerfumeIcon = defineComponent({
  name: 'PerfumeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '19', y: '5', width: '10', height: '7.5', rx: '2', fill: '#E76F51' }));
      children.push(h('rect', { x: '21.5', y: '12', width: '5', height: '4', fill: '#264653', 'stroke-width': sw(2.2) }));
      children.push(h('rect', { x: '11', y: '16', width: '26', height: '27', rx: '6', fill: '#F4A6A4' }));
      children.push(h('rect', { x: '15', y: '22', width: '18', height: '11', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '27.5', r: '2.6', fill: '#E76F51', stroke: 'none' }));
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

export default PerfumeIcon;
