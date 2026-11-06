import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BubbleTeaIcon = defineComponent({
  name: 'BubbleTeaIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M13 14 L35 14 L32 38 C31.7 40 29.5 41 27 41 L21 41 C18.5 41 16.3 40 16 38 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M26 14 L30 5', stroke: '#2A9D8F', 'stroke-width': sw(3.5), fill: 'none' }));
      children.push(h('path', { d: 'M17 22 L33 22', stroke: '#E9C46A', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '20', cy: '35', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '33', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '28', cy: '36', r: '2', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '25', cy: '38', r: '2', fill: '#264653', stroke: 'none' }));
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

export default BubbleTeaIcon;
