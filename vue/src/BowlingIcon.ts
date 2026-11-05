import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const BowlingIcon = defineComponent({
  name: 'BowlingIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '18', cy: '29', r: '11', fill: '#264653' }));
      children.push(h('circle', { cx: '14', cy: '25', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '18', cy: '23', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('circle', { cx: '22', cy: '25', r: '1.8', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M34 8 L38 8 L37 18 L40 24 L36 32 L33 32 L30 24 L33 18 Z', fill: '#FAEDCD' }));
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

export default BowlingIcon;
