import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BloodPressureIcon = defineComponent({
  name: 'BloodPressureIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '27', width: '26', height: '14', rx: '7', fill: '#264653' }));
      children.push(h('path', { d: 'M9 31 H20', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '33', cy: '17', r: '9', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M33 10.5 V12.5 M33 21.5 V23.5 M26.5 17 H28.5 M37.5 17 H39.5', stroke: '#264653', 'stroke-width': sw(1.6), fill: 'none' }));
      children.push(h('path', { d: 'M33 17 L37.5 13.5', stroke: '#E76F51', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('path', { d: 'M23 27 C 26 24 28.5 23 30.5 23', stroke: '#264653', 'stroke-width': sw(2.6), fill: 'none' }));
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

export default BloodPressureIcon;
