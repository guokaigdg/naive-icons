import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps, scaledStroke } from './iconProps';

export const ProjectorIcon = defineComponent({
  name: 'ProjectorIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const sw = scaledStroke(props.strokeWidth);
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '8', y: '18', width: '24', height: '16', rx: '3', fill: '#264653' }));
      children.push(h('circle', { cx: '20', cy: '26', r: '5', fill: '#FAEDCD' }));
      children.push(h('path', { d: 'M32 22 L42 14 L42 38 L32 30 Z', fill: '#E9C46A', stroke: 'none' }));
      children.push(h('path', { d: 'M14 34 L14 39 M26 34 L26 39', stroke: '#2A2A2A', 'stroke-width': sw(3), fill: 'none' }));
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

export default ProjectorIcon;
