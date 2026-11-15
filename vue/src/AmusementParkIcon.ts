import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const AmusementParkIcon = defineComponent({
  name: 'AmusementParkIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '22', r: '13.5' }));
      children.push(h('path', { d: 'M24 22 L24 8.5 M24 22 L33.5 12.6 M24 22 L37.5 22 M24 22 L33.5 31.4 M24 22 L24 35.5 M24 22 L14.5 31.4 M24 22 L10.5 22 M24 22 L14.5 12.6', stroke: '#2A2A2A', 'stroke-width': sw(2.2), fill: 'none' }));
      children.push(h('circle', { cx: '24', cy: '7.5', r: '2.4', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '34.7', cy: '11.9', r: '2.4', fill: '#E76F51', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '38.5', cy: '22', r: '2.4', fill: '#2A9D8F', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '34.7', cy: '32.1', r: '2.4', fill: '#F4A6A4', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '24', cy: '36.5', r: '2.4', fill: '#E9C46A', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '13.3', cy: '32.1', r: '2.4', fill: '#E76F51', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '9.5', cy: '22', r: '2.4', fill: '#2A9D8F', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '13.3', cy: '11.9', r: '2.4', fill: '#F4A6A4', 'stroke-width': sw(2.4) }));
      children.push(h('circle', { cx: '24', cy: '22', r: '3', fill: '#E76F51' }));
      children.push(h('path', { d: 'M24 22 L15 40 M24 22 L33 40', stroke: '#2A2A2A', 'stroke-width': sw(3.2), fill: 'none' }));
      children.push(h('path', { d: 'M12 41 H36', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default AmusementParkIcon;
