import { IApiInstance } from '../core/interfaces/method'

import All from '../core/functions/all'
import Find from '../core/functions/find'
import FindBy from '../core/functions/findBy'
import Create from '../core/functions/create'
import Update from '../core/functions/update'

export interface ICategory {
  descricao: string
  idCategoriaPai?: number
}

export type ICategoryFilters = Record<string, never>

export type ICategoryInfos = Record<string, never>

export interface ICategoryResponse {
  id: number
  descricao: string
  idCategoriaPai: number
}

export default function Categories (api: IApiInstance, raw: boolean) {
  const config = {
    api,
    raw,
    singularName: 'categoria',
    pluralName: 'categorias'
  }

  return Object.assign(config, {
    all: new All<ICategoryResponse, ICategoryFilters, ICategoryInfos>().all,
    find: new Find<ICategoryResponse, ICategoryInfos>().find,
    findBy: new FindBy<ICategoryResponse, ICategoryFilters, ICategoryInfos>()
      .findBy,
    create: new Create<ICategory, ICategoryResponse>().create,
    update: new Update<ICategory, ICategoryResponse>().update
  })
}
