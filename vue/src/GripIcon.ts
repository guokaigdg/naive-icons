import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const GripIcon = defineComponent({
  name: 'GripIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('circle', { cx: '17', cy: '14', r: '3.5', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '14', r: '3.5', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '24', r: '3.5', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '24', r: '3.5', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '17', cy: '34', r: '3.5', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '31', cy: '34', r: '3.5', fill: '#264653', stroke: 'none' }));
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

export default GripIcon;
