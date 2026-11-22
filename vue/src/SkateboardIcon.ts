import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const SkateboardIcon = defineComponent({
  name: 'SkateboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(
        h('g', { transform: 'rotate(-14 24 24)' }, [
          h('rect', { x: '7', y: '19', width: '34', height: '11', rx: '5.5', fill: '#264653' }),
          h('path', { d: 'M12 24 H36', stroke: '#8B5E3C', 'stroke-width': sw(2.4), fill: 'none' }),
          h('circle', { cx: '13', cy: '22', r: '1', fill: '#FAEDCD', stroke: 'none' }),
          h('circle', { cx: '24', cy: '21.5', r: '1', fill: '#FAEDCD', stroke: 'none' }),
          h('circle', { cx: '35', cy: '22', r: '1', fill: '#FAEDCD', stroke: 'none' }),
          h('path', { d: 'M13 30 V33 M35 30 V33', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }),
          h('circle', { cx: '13', cy: '35', r: '3.6', fill: '#E9C46A' }),
          h('circle', { cx: '35', cy: '35', r: '3.6', fill: '#E9C46A' }),
        ]),
      );
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

export default SkateboardIcon;
