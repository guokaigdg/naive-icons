import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const MonitorIcon = defineComponent({
  name: 'MonitorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '5', y: '9', width: '38', height: '26', rx: '4', fill: '#2A9D8F' }));
      children.push(h('path', { d: 'M12 17 L21 17', stroke: '#FAEDCD', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M12 24 L27 24', stroke: '#FAEDCD', 'stroke-width': sw(3) }));
      children.push(h('path', { d: 'M24 35 L24 41', 'stroke-width': sw(3.5) }));
      children.push(h('path', { d: 'M17 41 L31 41', 'stroke-width': sw(3.5) }));
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

export default MonitorIcon;
