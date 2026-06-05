export interface Props {
    tabs: string[]
    activeTab: string
    setActiveTab: (t: string) => void
}

interface TabI {
    value: string
    active: boolean
    onPress: () => void
}

const Tab = ({ value, active, onPress }: TabI) => {

    return (
        <div
            onClick={onPress}
            className={`${active ? "bg-primary" : "bg-ground-2"} cursor-pointer px-4 py-2 rounded-full`}>
            {value}
        </div>
    )

}

const Tabs = ({ tabs, activeTab, setActiveTab }: Props) => {
    return (
        <div className="flex items-center gap-2">
            {
                tabs?.map((t, i) => <Tab active={activeTab == t} onPress={() => setActiveTab(t)} value={t} key={i} />)
            }
        </div>
    )
}

export default Tabs