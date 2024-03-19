import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
  
export function SelectDemo({hoverColor, placeholder, label, array }: { hoverColor: string, placeholder: string, label: string, array: string[] }) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {
                    array.map((listItem: string) => (
                        <SelectItem key={listItem} className={`cursor-pointer hover:bg-${hoverColor}`} value={listItem}>{listItem}</SelectItem>
                    ))
                }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}