import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ScoreboardIcon = defineComponent({
  name: 'ScoreboardIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '9', width: '36', height: '21', rx: '3', fill: '#264653' }));
      children.push(h('path', { d: 'M24 9 L24 30', stroke: '#FAEDCD', 'stroke-width': sw(2.5), fill: 'none' }));
      children.push(h('circle', { cx: '14', cy: '19', r: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '19', r: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('circle', { cx: '30', cy: '19', r: '3', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M14 30 L12 40 M34 30 L36 40', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default ScoreboardIcon;
