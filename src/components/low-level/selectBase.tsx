import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    SxProps
} from "@mui/material"

interface Props<T> {
    label: string
    value: string | null
    name: keyof T | string
    items: T[]
    item_id: keyof T | ((item: T) => any)
    item_desc: keyof T| ((item: T) => any)
    onChange: (field: string, value: string | null) => void
    disabled?: boolean
    first_object?: {
        key: string | null,
        text: string
    }
    sx?: SxProps
}

const SelectBase = <T,>({
    label,
    value,
    name,
    onChange,
    items,
    item_id,
    item_desc,
    disabled,
    first_object,
    sx
}: Props<T>) => {

    const empty_id = first_object?.key || ''
    const empty_desc = first_object?.text || "Не выбрано"

    const handleChange = (event: SelectChangeEvent<string>) => {
        onChange(String(name), event.target.value)
    }

    return (
        <Stack direction={"row"} spacing={1} alignItems={"center"} sx={sx}>
            <FormControl sx={{width: "100%"}}>
                <InputLabel color={"primary"}>{label}</InputLabel>
                <Select
                    disabled={disabled || items.length === 0}
                    value={value || empty_id}
                    name={String(name)}
                    label={label}
                    onChange={handleChange}
                    variant="outlined"
                    size="small"
                >
                    {first_object && <MenuItem value={empty_id}>{empty_desc}</MenuItem>}
                    {items.map((item) => (
                        <MenuItem 
                            key={typeof(item_id) === "function" ? item_id(item) : item[item_id] } 
                            value={typeof(item_id) === "function" ? item_id(item) : item[item_id]}
                        >
                            {typeof(item_desc) === "function" ? item_desc(item) : item[item_desc]}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Stack>
    )
}

export default SelectBase
