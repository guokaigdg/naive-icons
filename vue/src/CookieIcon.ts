import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const CookieIcon = defineComponent({
  name: 'CookieIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M 24.00 9.40 Q 27.63 11.62 31.89 11.72 Q 33.75 15.55 37.28 17.93 Q 36.77 22.16 38.45 26.08 Q 35.73 29.36 35.03 33.56 Q 30.97 34.85 28.11 38.01 Q 24.00 36.90 19.89 38.01 Q 17.03 34.85 12.97 33.56 Q 12.27 29.36 9.55 26.08 Q 11.23 22.16 10.72 17.93 Q 14.25 15.55 16.11 11.72 Q 20.37 11.62 24.00 9.40 Z', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '19', cy: '18.5', r: '2.8', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '20.5', r: '2.3', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '21.5', cy: '29.5', r: '3', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '30.5', cy: '31', r: '2.1', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '15', cy: '27.5', r: '1.9', fill: '#8B5E3C', stroke: 'none' }));
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

export default CookieIcon;
