import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const OwlIcon = defineComponent({
  name: 'OwlIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M12.92 14.77 L15.69 6.46 L21.23 12.92 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M35.08 14.77 L32.31 6.46 L26.77 12.92 Z', fill: '#264653' }));
      children.push(h('ellipse', { cx: '24', cy: '26.77', rx: '13.85', ry: '14.77', fill: '#264653' }));
      children.push(h('circle', { cx: '18.46', cy: '22.15', r: '5.54', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '29.54', cy: '22.15', r: '5.54', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '18.46', cy: '23.08', r: '2.31', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '29.54', cy: '23.08', r: '2.31', fill: '#2A2A2A' }));
      children.push(h('path', { d: 'M21.69 27.69 L26.31 27.69 L24 31.38 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M17.54 36 Q 20.31 37.85 23.08 36', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
      children.push(h('path', { d: 'M24.92 36 Q 27.69 37.85 30.46 36', stroke: '#2A2A2A', fill: 'none', 'stroke-width': sw(1.8) }));
      children.push(h('ellipse', { cx: '18.46', cy: '41.54', rx: '3.23', ry: '1.66', fill: '#E9C46A' }));
      children.push(h('ellipse', { cx: '29.54', cy: '41.54', rx: '3.23', ry: '1.66', fill: '#E9C46A' }));
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

export default OwlIcon;
