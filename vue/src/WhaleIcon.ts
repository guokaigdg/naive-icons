import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const WhaleIcon = defineComponent({
  name: 'WhaleIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M 7.5 26 C 7.5 19.5 13 15.5 20 15.5 C 26 15.5 31.5 17.5 34.5 20.5 C 36.5 16.8 38.8 14.2 41.5 13 C 41.8 17.5 41 21.5 38.5 24.5 C 40.8 27.5 41.5 31.5 41.2 35.5 C 38.2 34 36 31.5 34.4 28.5 C 31.5 32.8 26 34.8 19.5 34.8 C 12 34.8 7.5 32 7.5 26 Z', fill: '#264653' }));
      children.push(h('path', { d: 'M 17.5 14.5 C 15.8 10.5 16.5 7 19 5.5', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('path', { d: 'M 8.2 28.5 C 11.5 30.5 15 31 18.5 30.5', stroke: '#FAEDCD', 'stroke-width': sw(2), fill: 'none' }));
      children.push(h('circle', { cx: '15', cy: '22', r: '1.4', fill: '#FAEDCD', stroke: 'none' }));
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

export default WhaleIcon;
