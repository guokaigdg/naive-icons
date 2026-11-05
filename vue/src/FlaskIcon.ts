import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const FlaskIcon = defineComponent({
  name: 'FlaskIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M18 6 L30 6 L30 14 L38 36 C 39 40 36 42 32 42 L16 42 C 12 42 9 40 10 36 L18 14 Z', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M13 30 L35 30 L38 36 C 39 40 36 42 32 42 L16 42 C 12 42 9 40 10 36 Z', fill: '#2A9D8F', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '36', r: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '27', cy: '38', r: '1.5', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M20 10 L28 10', stroke: '#8B5E3C', 'stroke-width': sw(2), fill: 'none' }));
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

export default FlaskIcon;
