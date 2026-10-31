import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const EditIcon = defineComponent({
  name: 'EditIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('path', { d: 'M8.64 37.44 L8.64 31.68 L29.76 10.56 L37.44 18.24 L16.32 39.36 L10.56 39.36 Z', fill: '#E9C46A' }));
      children.push(h('path', { d: 'M29.76 10.56 L35.52 4.8 L41.28 10.56 L37.44 16.32', fill: '#F4A6A4' }));
      children.push(h('path', { d: 'M8.64 37.44 L14.4 37.44', stroke: '#2A2A2A', 'stroke-width': sw(2) }));
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

export default EditIcon;
