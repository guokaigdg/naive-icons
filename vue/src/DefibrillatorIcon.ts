import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DefibrillatorIcon = defineComponent({
  name: 'DefibrillatorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '12', width: '32', height: '24', rx: '3', fill: '#E76F51' }));
      children.push(h('rect', { x: '13', y: '17', width: '14', height: '9', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M19 19 L17 23 L20 23 L18 27', stroke: '#E76F51', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '34', cy: '19', r: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M12 40 L36 40', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default DefibrillatorIcon;
