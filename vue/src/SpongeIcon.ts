import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const SpongeIcon = defineComponent({
  name: 'SpongeIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '15', width: '32', height: '20', rx: '8', fill: '#E9C46A' }));
      children.push(h('circle', { cx: '16', cy: '22', r: '2.5', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '28', r: '2', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '32', cy: '21', r: '2.5', fill: '#8B5E3C', stroke: 'none' }));
      children.push(h('circle', { cx: '20', cy: '32', r: '1.8', fill: '#8B5E3C', stroke: 'none' }));
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

export default SpongeIcon;
