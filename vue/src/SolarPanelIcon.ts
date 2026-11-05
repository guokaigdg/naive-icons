import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SolarPanelIcon = defineComponent({
  name: 'SolarPanelIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '12', width: '26', height: '18', rx: '2', fill: '#264653' }));
      children.push(h('path', { d: 'M8 18 H34 M8 24 H34 M14 12 V30 M22 12 V30 M28 12 V30', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('path', { d: 'M14 30 V38 M28 30 V38', 'stroke-width': sw(3) }));
      children.push(h('circle', { cx: '38', cy: '36', r: '4', fill: '#E9C46A' }));
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

export default SolarPanelIcon;
