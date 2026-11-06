import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const PleadingIcon = defineComponent({
  name: 'PleadingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '24', cy: '24', r: '16', fill: '#F4A6A4' }));
      children.push(h('ellipse', { cx: '17', cy: '22', rx: '4.6', ry: '5.2', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('ellipse', { cx: '31', cy: '22', rx: '4.6', ry: '5.2', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '22.5', r: '2.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '22.5', r: '2.2', fill: '#2A2A2A', stroke: 'none' }));
      children.push(h('circle', { cx: '18.2', cy: '21.2', r: '0.9', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('circle', { cx: '32.2', cy: '21.2', r: '0.9', fill: '#FFFFFF', stroke: 'none' }));
      children.push(h('path', { d: 'M12 15 C14 12.5 18 12.5 20 14 M28 14 C30 12.5 34 12.5 36 15', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M21 33 C23 31.5 25 31.5 27 33', stroke: '#2A2A2A', 'stroke-width': sw(2.5), fill: 'none' }));
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

export default PleadingIcon;
