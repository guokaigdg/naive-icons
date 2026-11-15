import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ClipboardListIcon = defineComponent({
  name: 'ClipboardListIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '10', y: '10', width: '28', height: '32', rx: '4', fill: '#FAEDCD' }));
      children.push(h('rect', { x: '18', y: '6', width: '12', height: '8', rx: '3', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '17', cy: '23', r: '1.5', fill: '#E76F51', stroke: 'none' }));
      children.push(h('path', { d: 'M21 23 L31 23', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '30', r: '1.5', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('path', { d: 'M21 30 L31 30', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '17', cy: '37', r: '1.5', fill: '#264653', stroke: 'none' }));
      children.push(h('path', { d: 'M21 37 L28 37', stroke: '#2A2A2A', 'stroke-width': sw(2), fill: 'none' }));
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

export default ClipboardListIcon;
