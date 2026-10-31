import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const DogIcon = defineComponent({
  name: 'DogIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('ellipse', { cx: '10.56', cy: '18.24', rx: '5.76', ry: '9.6', fill: '#8B5E3C' }));
      children.push(h('ellipse', { cx: '37.44', cy: '18.24', rx: '5.76', ry: '9.6', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '24', cy: '25.92', r: '15.36', fill: '#8B5E3C' }));
      children.push(h('circle', { cx: '18.24', cy: '24', r: '2.4', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '29.76', cy: '24', r: '2.4', fill: '#FFFFFF' }));
      children.push(h('circle', { cx: '18.24', cy: '24.96', r: '1.25', fill: '#2A2A2A' }));
      children.push(h('circle', { cx: '29.76', cy: '24.96', r: '1.25', fill: '#2A2A2A' }));
      children.push(h('ellipse', { cx: '24', cy: '31.68', rx: '3.84', ry: '2.88', fill: '#2A2A2A' }));
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

export default DogIcon;
