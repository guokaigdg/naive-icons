import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const VacuumCleanerIcon = defineComponent({
  name: 'VacuumCleanerIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '24', width: '18', height: '14', rx: '4', fill: '#E76F51' }));
      children.push(h('circle', { cx: '14', cy: '38', r: '3', fill: '#264653' }));
      children.push(h('circle', { cx: '20', cy: '38', r: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M26 27 C36 27 38 18 33 14', stroke: '#264653', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '30', y: '8', width: '10', height: '6', rx: '2', fill: '#264653' }));
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

export default VacuumCleanerIcon;
