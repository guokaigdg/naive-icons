import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TapeMeasureIcon = defineComponent({
  name: 'TapeMeasureIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '18', cy: '28', r: '10', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '18', cy: '28', r: '4', fill: '#264653', stroke: 'none' }));
      children.push(h('rect', { x: '26', y: '22', width: '16', height: '6', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30 22 L30 25 M34 22 L34 25 M38 22 L38 25', stroke: '#264653', 'stroke-width': sw(1.5), fill: 'none' }));
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

export default TapeMeasureIcon;
