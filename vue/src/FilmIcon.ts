import { defineComponent, h, type VNode } from 'vue';
import { iconPropDefs } from './types';
import { normalizeIconProps } from './iconProps';

export const FilmIcon = defineComponent({
  name: 'FilmIcon',
  inheritAttrs: false,
  props: iconPropDefs,
  setup(props, { attrs }) {
    return () => {
      const children: VNode[] = [];
      if (props.title) children.push(h('title', null, props.title));
      children.push(h('rect', { x: '6', y: '12', width: '36', height: '24', rx: '3', fill: '#264653' }));
      children.push(h('rect', { x: '10', y: '15', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '18', y: '15', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '26', y: '15', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '34', y: '15', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '10', y: '29', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '18', y: '29', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '26', y: '29', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '34', y: '29', width: '5', height: '4', rx: '1', fill: '#FAEDCD', stroke: 'none' }));
      children.push(h('rect', { x: '17', y: '21', width: '14', height: '6', rx: '1', fill: '#E76F51', stroke: 'none' }));
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

export default FilmIcon;
