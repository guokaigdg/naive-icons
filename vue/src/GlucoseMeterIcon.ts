import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const GlucoseMeterIcon = defineComponent({
  name: 'GlucoseMeterIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '9', y: '10', width: '26', height: '30', rx: '4', fill: '#264653' }));
      children.push(h('rect', { x: '20', y: '5', width: '6', height: '6', rx: '1', fill: '#E9C46A' }));
      children.push(h('rect', { x: '13', y: '14', width: '18', height: '10', rx: '1.5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M17 19.5 L20 17 L23 20.5 L27 16.5', stroke: '#2A9D8F', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '33', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M29.5 30.5 C 31.6 33 31.6 34.2 29.5 35.6 C 27.4 34.2 27.4 33 29.5 30.5 Z', fill: '#E76F51', stroke: 'none' }));
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

export default GlucoseMeterIcon;
