import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const TimesheetIcon = defineComponent({
  name: 'TimesheetIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '8', width: '21', height: '32', rx: '3', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M12 16 L23 16 M12 22 L23 22 M12 28 L22 28 M12 34 L19 34', stroke: '#264653', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '32', cy: '31', r: '7', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M32 26 L32 31 L36 34', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default TimesheetIcon;
