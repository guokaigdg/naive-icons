import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const BinderIcon = defineComponent({
  name: 'BinderIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '7', y: '7', width: '34', height: '34', rx: '2', fill: '#264653' }));
      children.push(h('rect', { x: '18', y: '15', width: '19', height: '8', rx: '2', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('path', { d: 'M21 27 L36 27', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '12', cy: '14', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '12', cy: '24', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '12', cy: '34', r: '2.5', fill: '#E9C46A', stroke: 'none' }));
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

export default BinderIcon;
