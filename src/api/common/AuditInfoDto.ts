export interface AuditInfoDto {
  createdAtUtc: Date
  createdById: number
  updatedAtUtc: Date | null
  updatedById: number | null
  deletedAtUtc: Date | null
  deletedById: number | null
}
