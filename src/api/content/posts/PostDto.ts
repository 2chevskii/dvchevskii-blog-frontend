import {EntityBaseDto} from "../../common/EntityBaseDto.ts";

export interface PostDto extends EntityBaseDto {
  title: string
  tagline: string | null
  body: string | null
  isDraft: boolean,
  headerImageId: number | null
  modifiedAtUtc: string
}
