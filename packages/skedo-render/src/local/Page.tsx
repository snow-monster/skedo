import { SkedoComponentProps } from '@skedo/meta'
import classes from './component.module.scss'
import ListRender from './ListRender'
export default ({bridge} : SkedoComponentProps) => {
	return <ListRender bridge={bridge} />
}