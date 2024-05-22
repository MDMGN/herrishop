import { useEffect, useState } from "react"
import { ajax } from "../helpers"
import type { reponseApiBrands, reponseApiCategories } from "../types/responseApi"
import { URL_BRANDS, URL_CATEGORIES } from "../api/API_HERRISHOP"
import { Brand, Category } from "../types/entities"

type Filter = {
    brands: Array<Brand["id"]>,
    category: Category["id"]
}

type Props = {
    handleFilter: (filter: Filter) => void,
    brandsFilters: Array<Brand["id"]>
}

export default function useFilter(props: Props) {
    const [ categories, setCategories ] = useState<Category[]>([])
    const [ brands, setBrands ] = useState<Brand[]>([])
    const [ filter, setFilter ] = useState({ brands: [], category: 0 } as Filter)
    const { handleFilter, brandsFilters } = props

    useEffect(() => {
        ajax({
            url: URL_BRANDS,
            method: "GET",
            cbSuccess: (resp: reponseApiBrands) => {
                const { data: brands } = resp
                setBrands([...brands])
            },
            cbError: (resp) => { }
        })
    }, [])

    useEffect(() => {
        ajax({
            url: URL_CATEGORIES,
            method: "GET",
            cbSuccess: (resp: reponseApiCategories) => {
                const { data: categories } = resp
                setCategories([...categories])
            },
            cbError: (resp) => { }
        })
    }, [])

    useEffect(() => {
        handleFilter(filter)
    }, [filter])

    return {
        categories,
        brands,
        setFilter,
        brandsFilters,
        filter
    }
}
