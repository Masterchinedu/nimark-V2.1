/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Vendor } from "./Vendor";
import { VendorCountArgs } from "./VendorCountArgs";
import { VendorFindManyArgs } from "./VendorFindManyArgs";
import { VendorFindUniqueArgs } from "./VendorFindUniqueArgs";
import { CreateVendorArgs } from "./CreateVendorArgs";
import { UpdateVendorArgs } from "./UpdateVendorArgs";
import { DeleteVendorArgs } from "./DeleteVendorArgs";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { VendorService } from "../vendor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Vendor)
export class VendorResolverBase {
  constructor(
    protected readonly service: VendorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "any",
  })
  async _vendorsMeta(
    @graphql.Args() args: VendorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Vendor])
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "any",
  })
  async vendors(@graphql.Args() args: VendorFindManyArgs): Promise<Vendor[]> {
    return this.service.vendors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Vendor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "read",
    possession: "own",
  })
  async vendor(
    @graphql.Args() args: VendorFindUniqueArgs
  ): Promise<Vendor | null> {
    const result = await this.service.vendor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vendor)
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "create",
    possession: "any",
  })
  async createVendor(@graphql.Args() args: CreateVendorArgs): Promise<Vendor> {
    return await this.service.createVendor({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vendor)
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "update",
    possession: "any",
  })
  async updateVendor(
    @graphql.Args() args: UpdateVendorArgs
  ): Promise<Vendor | null> {
    try {
      return await this.service.updateVendor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Vendor)
  @nestAccessControl.UseRoles({
    resource: "Vendor",
    action: "delete",
    possession: "any",
  })
  async deleteVendor(
    @graphql.Args() args: DeleteVendorArgs
  ): Promise<Vendor | null> {
    try {
      return await this.service.deleteVendor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Product], { name: "products" })
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @graphql.Parent() parent: Vendor,
    @graphql.Args() args: ProductFindManyArgs
  ): Promise<Product[]> {
    const results = await this.service.findProducts(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
