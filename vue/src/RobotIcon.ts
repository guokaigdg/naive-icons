import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const RobotIcon = defineComponent({
  name: 'RobotIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M24 8 V11', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '6', r: '2', fill: '#E76F51', 'stroke-width': sw(2) }));
      children.push(h('rect', { x: '12.5', y: '11', width: '23', height: '16', rx: '3.5', fill: '#FAEDCD' }));
      children.push(h('circle', { cx: '19', cy: '18', r: '2.2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '18', r: '2.2', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M20.5 23 H27.5', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('rect', { x: '15', y: '28.5', width: '18', height: '14', rx: '3', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M15 32 H9.5 V39 M33 32 H38.5 V39', 'stroke-width': sw(3), fill: 'none' }));
      children.push(h('rect', { x: '20', y: '32.5', width: '8', height: '6', rx: '1.5', fill: '#E9C46A', 'stroke-width': sw(2.2) }));
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

export default RobotIcon;
