import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PowerPlantIcon = defineComponent({
  name: 'PowerPlantIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '27', width: '15', height: '13', rx: '1.5', fill: '#264653' }));
      children.push(h('rect', { x: '8', y: '30', width: '4', height: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '14', y: '30', width: '4', height: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '8', y: '36', width: '4', height: '3', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M21 41 C 20 34 22 28 25 24 H29 C 32 28 34 34 33 41 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M30 41 C 29 34 31 28 34 24 H38 C 41 28 43 34 42 41 Z', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '26.5', cy: '20', r: '2.6', fill: '#FAEDCD', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '34', cy: '18', r: '2.4', fill: '#FAEDCD', 'stroke-width': sw(2.4) }));
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

export default PowerPlantIcon;
