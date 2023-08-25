import { Tab, Tabs, TabList, tabClasses } from "@mui/joy"
const TabTest = () => {
    return (
        <>
        <Tabs
          aria-label="tabs"
          defaultValue={0}
          sx={{
            bgcolor : "transparent"
          }}
        >
            <TabList
              disableUnderline = {true}
              sx = {{
                borderRadius: 'xl',
                gap : 0.5,
                p : 0.5,
                bgcolor : "background.level1",
                [`& .${tabClasses.root}[aria-selected="true"]`]: {
                    boxShadow: 'sm',
                    bgcolor: 'background.surface',
                },
              }}
            >
                <Tab>Expense</Tab>
                <Tab>Income</Tab>
            </TabList>
        </Tabs>
        </>

    )
}

export default TabTest