import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const DominoIcon = defineComponent({
  name: 'DominoIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '13', y: '5', width: '22', height: '38', rx: '4', fill: '#FFFFFF' }));
      children.push(h('path', { d: 'M14.5 24 H33.5', 'stroke-width': sw(2.6), fill: 'none' }));
      children.push(h('circle', { cx: '19', cy: '14', r: '2.6', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '14', r: '2.6', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '19', cy: '31', r: '2.4', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '24', cy: '36', r: '2.4', fill: '#264653', stroke: 'none' }));
      children.push(h('circle', { cx: '29', cy: '31', r: '2.4', fill: '#264653', stroke: 'none' }));
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

export default DominoIcon;
